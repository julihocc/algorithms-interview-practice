def survivalFish(fish_array):
    print(f"fish_array: {fish_array}")
    survivals = [fish_array.pop(0)]

    while len(fish_array) > 0:
        contender = fish_array.pop(0)
        print(f"contender: {contender}")
        while len(survivals) > 0:
            defender = survivals.pop()
            print(f"\tdefender: {defender}")
            if defender > 0 > contender:
                print("\t\tfighting {defender} vs {contender}")
                if defender < -contender:
                    if len(survivals) > 0:
                        continue
                    else:
                        survivals.append(contender)
                        break
                else:
                    survivals.append(defender)
                    break
            else:
                survivals.append(defender)
                survivals.append(contender)
                break
        print(f"\tsurvivals: {survivals}")
        print(f"\tfish_array: {fish_array}")
    return len(survivals)
