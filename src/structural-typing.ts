interface HasToUpperCase {
  toUpperCase: () => string;
}

function takesValue2(value: HasToUpperCase) {
  console.log(value.toUpperCase());
}

takesValue2("hello");

takesValue2({
  toUpperCase: () => "haaaiii",
});

takesValue2(123);
takesValue2({
  somethingElse: true,
});
