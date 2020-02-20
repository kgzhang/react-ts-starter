declare let process: {
  env: {
    NODE_ENV: string
    APP_ENV: string
    BASEURL: string
    PUBLIC_URL: string
  }
};

declare interface PlainObject {
  [propName: string]: any
}

declare interface BooleanObject {
  [propName: string]: any
}

declare interface StringObject {
  [propName: string]: string
}

declare interface NumberObject {
  [propName: string]: numnber
}