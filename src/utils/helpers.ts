import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export const convertWIBDate = (date: Date | string, type: "start" | "end" | null = null): Date => {
	if (type === "start") {
		return dayjs(date).tz("Asia/Jakarta").startOf("day").add(7, "hours").toDate();
	} else if (type === "end") {
		return dayjs(date).tz("Asia/Jakarta").endOf("day").add(7, "hours").toDate();
	}
	return dayjs(date).tz("Asia/Jakarta").add(7, "hours").toDate();
};

export const currentWIB = (format: string = "YYYY-MM-DD HH:mm:ss"): string => {
	return dayjs().tz("Asia/Jakarta").format(format);
};

export const currentWIBDate = (): Date => {
	const localDate = new Date();
	const jakartaTimezoneOffset = 7 * 60; // Jakarta is UTC+7
	const jakartaDate = new Date(localDate.getTime() + jakartaTimezoneOffset * 60 * 1000);
	return jakartaDate;
};
