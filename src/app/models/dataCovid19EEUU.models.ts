export interface DataCovid19USA{
  UID: number;
  iso2: string;
  iso3: string;
  code3: number;
  FIPS: number;
  Admin2: string;
  Province_State: string;
  Country_Region: string;
  Lat: number;
  Long_: number;
  Combined_Key: string;
  Population: number;
  [dates: string]: any;
}

export interface NewDataCovid19USA extends Omit<DataCovid19USA, 'UID'|'iso2'|'iso3'|'code3'|'FIPS'|'Admin2'|'Province_State'|'Country_Region'|'Combined_Key'>{
  newData: any[]
}
