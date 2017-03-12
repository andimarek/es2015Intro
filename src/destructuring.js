const [a, b] = [1, 2];

const [c, , d] = [1, 2, 3];

const { name: newName, someOtherName } = { name: 11, someOtherName: 'value' };

// newName = 11, someOtherName = 'value'

function objectAsNamedArguments({ namedArg1, namedArg2, namedArg2: newNameForArg3 }) {

}