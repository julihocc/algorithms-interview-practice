type BloodType = "A" | "B" | "AB" | "O";
type RhType = "+" | "-";
type FullType = `${BloodType}${RhType}`;
export type ResultType = FullType[] | "IMPOSSIBLE";
export type ParentType = FullType | null;

const A_POSSIBLE: Set<BloodType> = new Set<BloodType>(["A"]);
const B_POSSIBLE: Set<BloodType> = new Set<BloodType>(["B"]);
const AB_POSSIBLE: Set<BloodType> = new Set<BloodType>(["AB"]);
const O_POSSIBLE: Set<BloodType> = new Set<BloodType>(["O"]);
const ALL_POSSIBLE: Set<BloodType> = new Set<BloodType>(["A", "B", "AB", "O"]);
const NONE_POSSIBLE: Set<BloodType> = new Set<BloodType>();

function separate(fullType: FullType): [BloodType, RhType] {
    return [fullType.slice(0, -1) as BloodType, fullType.slice(-1) as RhType];
}

function parentCanBeNegative(otherParent: RhType, child: RhType): boolean {
    return child === '-' || otherParent === '+';
}

function childCanHavePositive(parentOne: RhType, parentTwo: RhType): boolean {
    return parentOne === '+' || parentTwo === '+';
}

function getUnknownParentAlleles(otherParent: BloodType, child: BloodType): Set<BloodType> {
    if (child === "O") {
        return otherParent === "AB" ? NONE_POSSIBLE : new Set([...A_POSSIBLE, ...B_POSSIBLE, ...O_POSSIBLE]);
    } else if (child === "A") {
        return otherParent in ["A", "AB"] ? ALL_POSSIBLE : new Set([...A_POSSIBLE, ...AB_POSSIBLE]);
    } else if (child === "B") {
        return otherParent in ["B", "AB"] ? ALL_POSSIBLE : new Set([...B_POSSIBLE, ...AB_POSSIBLE]);
    } else {
        switch (otherParent) {
            case "O":
                return NONE_POSSIBLE;
            case "AB":
                return new Set([...A_POSSIBLE, ...B_POSSIBLE, ...AB_POSSIBLE]);
            case "A":
                return new Set([...B_POSSIBLE, ...AB_POSSIBLE]);
            default:
                return new Set([...A_POSSIBLE, ...AB_POSSIBLE]);
        }
    }
}

function getChildAlleles(parentOne: BloodType, parentTwo: BloodType): Set<BloodType> {
    const matches = (value: BloodType) => parentOne === value || parentTwo === value;
    if (matches("O")) {
        if (matches("AB")) return new Set([...A_POSSIBLE, ...B_POSSIBLE]);
        else if (matches("A")) return new Set([...A_POSSIBLE, ...O_POSSIBLE]);
        else if (matches("B")) return new Set([...B_POSSIBLE, ...O_POSSIBLE]);
        else return O_POSSIBLE;
    } else if (matches("AB")) {
        return new Set([...A_POSSIBLE, ...B_POSSIBLE, ...AB_POSSIBLE]);
    } else if (matches("A")) {
        return matches("B") ? ALL_POSSIBLE : new Set([...A_POSSIBLE, ...O_POSSIBLE]);
    } else {
        return new Set([...B_POSSIBLE, ...O_POSSIBLE]);
    }
}

function parentIsUnknown(otherParent: FullType, child: FullType): [Set<BloodType>, boolean, boolean] {
    const [otherParentABO, otherParentRh]: [("A" | "B" | "AB" | "O"), ("+" | "-")] = separate(otherParent);
    const [childABO, childRh]: [("A" | "B" | "AB" | "O"), ("+" | "-")] = separate(child);
    return [
        getUnknownParentAlleles(otherParentABO, childABO),
        true,
        parentCanBeNegative(otherParentRh, childRh)
    ];
}

function childIsUnknown(p1: FullType, p2: FullType): [Set<BloodType>, boolean, boolean] {
    const [p1ABO, p1Rh]: [("A" | "B" | "AB" | "O"), ("+" | "-")] = separate(p1);
    const [p2ABO, p2Rh]: [("A" | "B" | "AB" | "O"), ("+" | "-")] = separate(p2);
    return [
        getChildAlleles(p1ABO, p2ABO),
        childCanHavePositive(p1Rh, p2Rh),
        true
    ];
}

function retrieveUnknown(valuesPossible: Set<BloodType>, canBePositive: boolean, canBeNegative: boolean): ResultType {
    if (!valuesPossible.size) {
        return "IMPOSSIBLE";
    } else {
        const output: FullType[] = [];
        for (const value of valuesPossible) {
            if (canBePositive) {
                const fullType: FullType = (value + '+') as FullType;
                output.push(fullType)
            }
            ;
            if (canBeNegative) {
                const fullType: FullType = (value + '-') as FullType;
                output.push(fullType)
            }
            ;
        }
        return output.sort();
    }
}

export function process(caseInput: [ParentType, ParentType, ParentType]): [string, ResultType] {
    const [p1, p2, child] = caseInput;
    if (p1 === null) {
        return ["parent1", retrieveUnknown(...parentIsUnknown(p2 as FullType, child as FullType))];
    } else if (p2 === null) {
        return ["parent2", retrieveUnknown(...parentIsUnknown(p1 as FullType, child as FullType))];
    } else {
        return ["child", retrieveUnknown(...childIsUnknown(p1 as FullType, p2 as FullType))];
    }
}
