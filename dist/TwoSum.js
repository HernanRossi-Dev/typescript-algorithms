"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
function twoSum(nums, target) {
    const hashTable = new Map();
    nums.forEach((item, i) => {
        if (hashTable.has(item)) {
            let dupList = hashTable.get(item);
            dupList.push(i);
            hashTable.set(item, dupList);
        }
        else {
            hashTable.set(item, [i]);
        }
    });
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let remainder = target - num;
        if (num === remainder) {
            if (hashTable.has(remainder)) {
                const dupList = hashTable.get(num);
                if (dupList.length > 1) {
                    const index = dupList.find((dupIndex) => dupIndex !== i);
                    if (index) {
                        return [i, index];
                    }
                }
            }
        }
        else if (hashTable.has(remainder))
            return [i, hashTable.get(remainder)[0]];
    }
    return [];
}
const main = () => {
    const testCases = [
        { input: [2, 7, 11, 15], target: 9, expected: [0, 1] }
    ];
    testCases.forEach(({ input, target, expected }) => {
        const result = twoSum(input, target);
        lodash_1.default.isEqual(lodash_1.default.sortBy(result), lodash_1.default.sortBy(expected));
    });
};
main();
//# sourceMappingURL=TwoSum.js.map