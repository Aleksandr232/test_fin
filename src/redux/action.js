import {
  INPUT_TEXT,
  INPUT_NUMBER,
  INPUT_ADDRESS,
  INPUT_TITLE,
  INPUT_EVENT,
  INPUT_DESC,
  INPUT_IMG,
  INPUT_DATE
} from "./type";

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function inputNum(num) {
  return {
    type: INPUT_NUMBER,
    num,
  };
}

export function inputAddress(address) {
  return {
    type:INPUT_ADDRESS,
    address,
  };
}

export function inputTitle(title) {
  return {
    type: INPUT_TITLE,
    title,
  };
}

export function inputEvent(event) {
  return {
    type: INPUT_EVENT,
    event,
  };
}

export function inputDesc(desc) {
  return {
    type: INPUT_DESC,
    desc,
  };
}


export function inputImg(img) {
    return {
      type: INPUT_IMG,
      img,
    };
  }

  export function inputDate(date) {
    return {
      type: INPUT_DATE,
      date,
    };
  }