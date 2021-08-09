import { Converter } from "converter-1c-internal";

export default function hadler(req, res) {

  res.set('Content-Type', 'text/plain');
  res.set('Content-Type', 'application/1c-internal');

  const response = {name: "Max"}

  res.send(Converter.convertTo1C(response));
}