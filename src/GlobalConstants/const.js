var path;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  path = "http://localhost:3000";
} else {
  // production code
  path = "https://spyderscrypt.github.io/sscryptwebsite";
}
