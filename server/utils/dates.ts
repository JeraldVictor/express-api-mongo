import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(tz);

export const dateNow = (format = "DD-MM-YYYY HH:mm:ss") =>
  dayjs().tz("Asia/Calcutta").format(format);
