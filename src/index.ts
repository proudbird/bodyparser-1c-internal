import * as http from "http";
import { IncomingMessage, NextFunction } from "connect";
import bodyParser from "body-parser";
import { Converter } from "converter-1c-internal";

export default function parser(req: IncomingMessage & {body: any}, res: http.ServerResponse, next: NextFunction) {

  function parse1cInternal(err?: any) {
    try {
      req.body = Converter.convertFrom1C(req.body);
      next();
    } catch(error) {
      next(new Error(`Can't parse body as 1C: Enterprise internal string (${error})`));
    }
  }

  bodyParser.text({ type: "application/1c-internal" })(req, res, parse1cInternal);
}