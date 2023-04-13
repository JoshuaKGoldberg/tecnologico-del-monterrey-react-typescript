function takesValue(value) {
  console.log(value.toUpperCase());
}

takesValue("hello");

takesValue({
  toUpperCase: () => "haaaiii",
});

takesValue(123);
