import * as jose from "jose";
import { ITEM_LIMIT } from "../config/api";

const API_ADRESS = process.env.REACT_APP_API_ADRESS;

async function generateToken() {
  const token = await new jose.SignJWT({ username: "user" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(Date.now() * 1000)
    .sign(
      Uint8Array.from(
        process.env.REACT_APP_API_SECRET.split("").map((c) => c.charCodeAt(0))
      )
    );
  return token;
}

async function getEventsPerPage(page = 1) {
  const token = await generateToken();
  const res = await fetch(
    API_ADRESS.concat(`?limit=${ITEM_LIMIT}&page=${page}`),
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const json = await res.json();
  return json;
}

async function filterAllEvents(searchTerm) {
  const token = await generateToken();
  const res = await fetch(API_ADRESS, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  const filteredArray = json.data.filter((item) => {
    let acceptsCriteria = false;
    if (
      item.category.value.includes(searchTerm) ||
      item.data.value.eventType.includes(searchTerm) ||
      item.data.value.locationName.includes(searchTerm) ||
      item.dateIssued.value.includes(searchTerm)
    ) {
      acceptsCriteria = true;
    }

    if (acceptsCriteria) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredArray);
  return json;
}

export { getEventsPerPage, filterAllEvents };
