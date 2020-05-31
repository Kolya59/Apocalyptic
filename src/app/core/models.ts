export class Rule {
    id: string;
    name: string;
    premises: Statement[];
    conclusions: Statement[];
    description: string;

    constructor(
        id: string,
        name: string,
        premises: Statement[],
        conclusions: Statement[],
        description: string
    ) {
        this.id = id;
        this.name = name;
        this.premises = premises;
        this.conclusions = conclusions;
        this.description = description;
    }
}

export class Statement implements Statement {
    id: string;
    description: string;
    name: string;
    variable: Variable;
    value: string;

    constructor(
        id: string,
        description: string,
        name: string,
        variable: Variable,
        value: string
    ) {
        this.id = id;
        this.description = description;
        this.name = name;
        this.variable = variable;
        this.value = value;
    }
}

export class Variable implements Variable {
    domain: string[];
    description: string;
    id: string;
    isRequested: boolean;
    requestMsg?: string;
    name: string;

    constructor(
        id: string,
        name: string,
        isRequested: boolean,
        description: string,
        domain: string[]
    ) {
        this.id = id;
        this.name = name;
        this.isRequested = isRequested;
        this.description = description;
        this.domain = domain;
    }
}

export class VariableValueMap {
    [uuid: string]: string;
}
