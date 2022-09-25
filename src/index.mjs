import { a, aaaa, aaaaa, ip, ips } from './aaaaa.mjs';
import {
  soa,
  cname,
  mx,
  txt,
  srv,
  ns,
  caa,
  ptr,
  naptr,
  reverse,
  lookup,
} from './others.mjs';
import query from './query.mjs';

export default {
  query: query,
  all: query,
  a: a,
  aaaa: aaaa,
  aaaaa: aaaaa,
  ip: ip,
  ips: ips,
  ipof: ips,
  ipsof: ips,
  soa: soa,
  cname: cname,
  mx: mx,
  mail: mx,
  txt: txt,
  text: txt,
  srv: srv,
  ns: ns,
  nameserver: ns,
  caa: caa,
  ptr: ptr,
  naptr: naptr,
  reverse: reverse,
  lookup: lookup,
};

export { query, query as all };
export { a, aaaa, aaaaa, ip, ip as ipof, ips, ips as ipsof };
export {
  soa,
  cname,
  mx,
  mx as mail,
  txt,
  txt as text,
  srv,
  ns,
  ns as nameserver,
  caa,
  ptr,
  naptr,
  reverse,
  lookup,
};
