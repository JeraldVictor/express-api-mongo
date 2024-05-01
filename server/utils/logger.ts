import logger from "pino";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(tz);

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "hostname,pid",
      translateTime: `${dayjs()
        .tz("Asia/Calcutta")
        .format("DD-MM-YYYY HH:mm:ss")}`, //"IST:dddd, mmmm dS, yyyy, h:MM:ss TT", https://www.npmjs.com/package/dateformat
    },
  },
});
export default log;
