import _ from 'lodash'

function twoSum(nums: number[], target: number): number[] {
    const hashTable = new Map()
    nums.forEach((item, i) => {
        if (hashTable.has(item)) {
            let dupList = hashTable.get(item)
            dupList.push(i)
            hashTable.set(item, dupList)
        } else {
            hashTable.set(item, [i])
        }
    })
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        let remainder = target - num
        if (num === remainder) {
            if (hashTable.has(remainder)) {
                const dupList: number[] = hashTable.get(num)
                if (dupList.length > 1) {
                    const index = dupList.find((dupIndex: number) => dupIndex !== i)
                    if (index) {
                        return [i, index]
                    }
                }
            }
        } else if (hashTable.has(remainder)) return [i, hashTable.get(remainder)[0]]
    }
    return []
}

type TestCase = {
    input: number[]
    target: number
    expected: number[]
}
const main = () => {
    const testCases: TestCase[] = [
        { input: [2, 7, 11, 15], target: 9, expected: [0, 1] }
    ]

    testCases.forEach(({ input, target, expected }) => {
        const result = twoSum(input, target)
        _.isEqual(_.sortBy(result), _.sortBy(expected))
    })
}

main()