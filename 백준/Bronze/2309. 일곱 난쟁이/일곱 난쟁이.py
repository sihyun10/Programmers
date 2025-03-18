import sys

nine_dwarf = []
for i in range(9):
  nine_dwarf.append(int(sys.stdin.readline()))

def find_fake_dwarfs(dwarfs):
  total_height = sum(dwarfs)
  excess_height = total_height - 100
  
  for i in range(8):
    for j in range(i + 1, 9):
      if dwarfs[i] + dwarfs[j] == excess_height:
        return dwarfs[i], dwarfs[j]
  return None, None

def print_real_dwarfs(dwarfs, fake1, fake2):
  for dwarf in dwarfs:
    if dwarf != fake1 and dwarf != fake2:
      print(dwarf)


nine_dwarf.sort()
fake1, fake2 = find_fake_dwarfs(nine_dwarf)
if fake1 is not None and fake2 is not None:
  print_real_dwarfs(nine_dwarf, fake1, fake2)
