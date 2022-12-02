req = new XMLHttpRequest()
req.open('GET', 'https://adventofcode.com/2022/day/2/input')
req.send()

raw = req.responseText.trim().split('\n')

// part 1 - just use a lookup table for simplicity
scores = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6
}

part1 = raw.map(x => scores[x]).reduce((t, v) => t + v, 0)

// part 2 - same approach, just revise our rules
scores2 = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
}

part2 = raw.map(x => scores2[x]).reduce((t, v) => t + v, 0)
