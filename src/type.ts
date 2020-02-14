export type Language = {
  name: string
}

export type Country = {
  flag: string,
  name: string, 
  languages: Language[],
  population: number,
  region: string
}