import { useState } from "react";

// Total
// Size: 1 (+$10) | 2 (+$15) | 3 (+$20)
// Milk: 1 (+$0) | 2 (+$5) | 3 (+$10)
// Sugar: 1 (+$0) | 2 (+$2) | 3 (+$4)


export default function useCoffeTotal() {
    const [totalSize, setTotalSize] = useState(0);
    const [totalMilk, setTotalMilk] = useState(0);
    const [totalSugar, setTotalSugar] = useState(0);

    const [isSizeValid, setIsSizeValid] = useState(false);
    const [isMilkValid, setIsMilkValid] = useState(false);
    const [isSugarValid, setIsSugarValid] = useState(false);

    return {
        total: totalSize + totalMilk + totalSugar,
        isValid: isSizeValid && isMilkValid && isSugarValid,
        updateTotalSize(option) {
            if (option === 1) {
                setIsSizeValid(true);
                setTotalSize(10);
            } else if (option === 2) {
                setIsSizeValid(true);
                setTotalSize(15);
            } else if (option === 3) {
                setIsSizeValid(true);
                setTotalSize(20);
            } else {
                setIsSizeValid(false);
                setTotalSize(0);
            }
        },
        updateTotalMilk(option) {
            if (option === 1) {
                setIsMilkValid(true);
                setTotalMilk(0);
            } else if (option === 2) {
                setIsMilkValid(true);
                setTotalMilk(5);
            } else if (option === 3) {
                setIsMilkValid(true);
                setTotalMilk(10);
            } else {
                setIsMilkValid(false);
                setTotalMilk(0);
            }
        },
        updateTotalSugar(option) {
            if (option === 1) {
                setIsSugarValid(true);
                setTotalSugar(0);
            } else if (option === 2) {
                setIsSugarValid(true);
                setTotalSugar(2);
            } else if (option === 3) {
                setIsSugarValid(true);
                setTotalSugar(4);
            } else {
                setIsSugarValid(false);
                setTotalSugar(0);
            }
        }
    }
}