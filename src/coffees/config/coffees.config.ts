import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  //helps us to register a namespaced configuration object under the key past as a fist argument
  foo: 'bar',
}));
