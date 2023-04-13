type Result<T> = SuccessResult<T> | FailureResult;

interface SuccessResult<T> {
  data: T;
  succeeded: true;
}

interface FailureResult {
  error: Error;
  succeeded: false;
}

function randomResult(): Result<string> {
  return Math.random() > 0.5
    ? { data: "yay", succeeded: true }
    : { error: new Error("oh no"), succeeded: false };
}

const myResult = randomResult();

myResult.data;
// Property 'data' does not exist on type 'Result<string>'.
//   Property 'data' does not exist on type 'FailureResult'.

if (myResult.succeeded) {
  myResult.data;
  //       ^?
} else {
  myResult.error;
  //       ^?
}

function takesArrayOfStrings(things: string[] /* Array<string> */) {
  return takesArrayOfThings(things);
}

takesArrayOfStrings(["a", "b", "c"]);
takesArrayOfStrings("abc");
takesArrayOfStrings([1, 2, 3]);

function takesArrayOfThings<T>(things: T[]) {
  for (const thing of things) {
    console.log(thing);
  }
  return things;
}

takesArrayOfThings(["a", "b", "c"]);

takesArrayOfThings([1, 2, 3]);
