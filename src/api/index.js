const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function mockFetchFoo() {
  return delay(2000).then(() => ({
    bar: "hello baz",
  }));
}
