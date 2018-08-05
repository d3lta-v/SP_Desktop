//#region Constant strings

export const ERROR_AUTH_INVALID_JSON = "Login server returned an invalid response. Please contact the developer.";
export const ERROR_AUTH_INVALID_PASSWORD = "Incorrect password or username";

//#endregion Constant strings


//#region Calendar

export interface CalendarEntry {
  summary: string;
  startTime: string;
  endTime: string;
  colorId: string;
};

//#endregion Calendar


//#region User

/**
 * A class that encapsulates user information, such as the user's 
 * access token and name, and provides common functionality such as 
 * JSON validation and conversion.
 */
export class User {

  constructor(
    private accessToken: string,
    private name: string
  ) { }

  getAccessToken(): string {
    return this.accessToken;
  }

  getName(): string {
    return this.name;
  }

  // fromJSON is used to convert an serialized version
  // of the User to an instance of the class
  static fromJSON(json: string): User {
    let rawJSON = JSON.parse(json);
    return new User(rawJSON['access_token'], rawJSON['name']);
  }

  static isValid(json: string): boolean {
    let unvalidatedJSON = JSON.parse(json);
    let valid = true;

    unvalidatedJSON.hasOwnProperty('access_token') ? valid = true : valid = false;
    unvalidatedJSON.hasOwnProperty('name') ? valid = true : valid = false;

    return valid;
  }
}

// export interface UserJSON {
//   access_token: string;
//   token_type: string;
//   expires_in: number;
//   role: string;
//   name: string;
// };

//#endregion User