const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function mockFetchFoo() {
  return delay(2000).then(() => ({
    bar: "hello baz",
    stamp: +Date.now(),
  }));
}

const contacts = [
  {
    id: 1,
    firstname: "alex",
    lastname: "fan",
  },
  {
    id: 2,
    firstname: "joe",
    lastname: "lee",
  },
  {
    id: 3,
    firstname: "kevin",
    lastname: "guo",
  },
];

export async function mockFetchContacts() {
  return delay(2000).then(() => contacts);
}
