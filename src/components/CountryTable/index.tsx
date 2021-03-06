import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _orderBy from 'lodash/orderBy';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import _isEmpty from 'lodash/isEmpty';

import fetchCountry from '../../redux/actions/country';
import TableHeader from '../TableHeader';
import TableRows from '../TableRows';
import { Country, AppState } from '../../type';

type Props = {
  input: string;
  handleSort: (sortValue: string) => void;
  isSorted: boolean;
  sortValue: string;
  nameDetails: string;
  takeName: (nameDetails: string) => void;
};

const CountryTable = ({
  input,
  handleSort,
  isSorted,
  sortValue,
  takeName,
  nameDetails,
}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (_isEmpty(localCountryData)) {
      dispatch(fetchCountry());
    }
    // eslint-disable-next-line
  }, []);

  const localCountryData: any = localStorage.getItem('Countries');

  const countryList: Country[] = JSON.parse(localCountryData);

  let fetchedCountries = useSelector(
    (state: AppState) => state.product.countries
  );

  let list: Country[] = [];
  if (countryList) {
    list = countryList;
  } else {
    list = fetchedCountries;
  }

  if (list) {
    const filterCountries = list.filter(
      (country) =>
        country.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
    const sortedArr = _orderBy(
      filterCountries,
      [sortValue.toLowerCase()],
      isSorted ? 'asc' : 'desc'
    );

    return (
      <Table>
        <TableHead>
          <TableHeader
            handleSort={handleSort}
            isSorted={isSorted}
            sortValue={sortValue}
          />
        </TableHead>
        <TableBody>
          {sortedArr.map((country) => {
            return (
              <TableRows
                key={country.name}
                name={country.name}
                link={country.flag}
                languages={country.languages}
                population={country.population}
                region={country.region}
                takeName={takeName}
                nameDetails={nameDetails}
              />
            );
          })}
        </TableBody>
      </Table>
    );
  } else return <div>loading</div>;
};

export default CountryTable;
