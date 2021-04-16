export type Protocol_Host_Port_Basepath = string;

export interface Endpoints {
  items: Protocol_Host_Port_Basepath;
}

export interface AppConfig {
  endpoints: Endpoints;
}
