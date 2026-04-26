import { Injectable } from '@nestjs/common';

@Injectable()
export class SyncService {

    async validateRequest(employeeId: number, daysRequested: number) {
        console.log("HCM called !");

        const random = Math.random();

        if (random < 0.2) {
            throw new Error('HCM service unavailable');
        }

        // simple validation logic
        if (daysRequested <= 10) {
            console.log("HCM approved");
            return { status: 'approved' };
        } else {
            console.log("HCM rejected");
            return { status: 'rejected' };
        }
    }

    async syncBalances(data: any[]) {
        console.log("Batch sync from HCM ");

        return {
            message: "Batch received",
            records: data.length,
        };
    }
}