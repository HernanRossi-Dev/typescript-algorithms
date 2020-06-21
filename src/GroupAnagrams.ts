function groupAnagrams(strs: string[]): string[][] {
  if (strs.length < 2) return [strs]
  // HashMap has a map of interter mapping to list of list of strings for anagrams that match the hash for chaining
  const codeHash = new Map()
  let currentCode = 0
  for (let i = 0; i < strs.length; i++) {
    currentCode = 0
    let word = strs[i]
    // Get a hash key for the current word
    for (let j = 0; j < word.length; j++) {
      currentCode = currentCode + word.charCodeAt(j)
    }
    // Check if the hash key already exists in the hashmap
    if (codeHash.has(currentCode)) {
      // If exists in the hash map iterate throu 
      const anagramLists = codeHash.get(currentCode)
      let match = false
      for (let k = 0; k < anagramLists.length; k++) {
        let list = anagramLists[k]
        // Do a hashtable check for anagram
        if (checkAnagram(word, list[0])) {
          list.push(word)
          codeHash.set(currentCode, anagramLists)
          match = true
          break
        }
      }
      //If no match found in list of anagrams add a new list
      if (!match) {
        anagramLists.push([word])
        codeHash.set(currentCode, anagramLists)
      }
    } else {
      //There is no conflicting hash entry create a new key value
      let newAnagramList: string[][] = [[word]]
      codeHash.set(currentCode, newAnagramList)
    }
  }
  //Merge all lists return result
  let result: string[][] = []
  codeHash.forEach((lists) => {
    result = result.concat(lists)
  })
  return result
}

const checkAnagram = (str1: string, str2: string): boolean => {
  const hashMap = new Map()
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i]
    if (hashMap.has(char)) {
      let count = hashMap.get(char)
      hashMap.set(char, count + 1)
    } else {
      hashMap.set(char, 1)
    }
  }
  for (let j = 0; j < str2.length; j++) {
    let char = str2[j]
    if (hashMap.has(char)) {
      let count = hashMap.get(char) - 1
      if (count === 0) {
        hashMap.delete(char)
      } else {
        hashMap.set(char, count)
      }
    }
  }
  if (hashMap.size) return false
  return true
}

const testGroupAnagrams = () => {
  const testCases = [
    {
      input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [
        ["ate", "eat", "tea"],
        ["nat", "tan"],
        ["bat"]
      ]
    },
    {
      input: ["tho", "tin", "erg", "end", "pug", "ton", "alb", "mes", "job", "ads", "soy", "toe", "tap", "sen", "ape", "led", "rig", "rig", "con", "wac", "gog",
        "zen", "hay", "lie", "pay", "kid", "oaf", "arc", "hay", "vet", "sat", "gap", "hop", "ben", "gem", "dem", "pie", "eco", "cub", "coy", "pep", "wot", "wee"],
      expected: [
        ["wee"], ["wot"], ["pep"], ["eco"], ["pie"], ["ben"], ["coy"], ["dem"], ["sat"],
        ["arc"], ["vet"], ["pay"], ["cub"], ["ads"], ["ton"], ["kid"], ["pug"], ["oaf"],
        ["ape"], ["led"], ["hay", "hay"], ["tho"], ["tin"], ["mes"], ["gap"], ["erg"],
        ["lie"], ["alb"], ["tap"], ["end"], ["toe"], ["soy"], ["gem"], ["rig", "rig"],
        ["hop"], ["sen"], ["con"], ["job"], ["wac"], ["gog"], ["zen"]]
    }
  ]

  testCases.forEach(({ input, expected }) => {
    const result = groupAnagrams(input)
    console.log("Result: ", result, " expected: ", expected)
  })
}

testGroupAnagrams()
