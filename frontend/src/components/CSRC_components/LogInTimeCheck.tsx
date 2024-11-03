"use client";

import { useEffect } from "react";
import { calcExpiryDate } from "@/lib/utils";

export default function LogInTimeCheck() {
	useEffect(() => {
		calcExpiryDate();
	}, []);

	return null;
}
