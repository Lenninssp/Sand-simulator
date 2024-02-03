# Falling Sand

This work will be based on the coding challenge number 180 from The Coding Train

## The theory

We are going to base on the popular game "the game of life" in order to make the canvas for the project.

| 0 | 1 | 1 | 0 | 0 | 1 |
|---|---|---|---|---|---|
| 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 0 | 1 | 1 | 0 | 0 | 1 |

A 2D Canvas will work best with our falling sand simulator.

| 0 | 0 | 0 | 0 | 0 | 0 |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 |

if one block is equal to 1 and the block below is wqual to 0 then they will swap places:

| 0 | 0 | 0 | 0 | 0 | 0 | ➡️  | 0 | 0 | 0 | 0 | 0 | 0 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 1️⃣ | 0 | 0 | ➡️  | 0 | 0 | 0 | 0️⃣ | 0 | 0 |
| 0 | 0 | 0 | 0️⃣ | 0 | 0 |  ➡️ | 0 | 0 | 0 | 1️⃣ | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 |  ➡️ | 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 0 | 0 |  ➡️ | 0 | 0 | 0 | 0 | 0 | 0 |


>if there is already a 1 under then nothing happens


