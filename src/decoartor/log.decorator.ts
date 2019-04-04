export function TestLog(target, name, descriptor) {
    const method = descriptor.value;
    descriptor.value = function(...args) {
        const result = method.apply(this, args);
        let outResult = null;
        if (typeof result === 'object') {
            outResult = JSON.stringify(result);
        } else {
            outResult = result;
        }
        if ( typeof outResult === 'undefined') {
            outResult = 'void';
        }

        console.log(`${new Date().toLocaleString()} - [${target.constructor.name}]: ${name} (${args[0].name}) => ${outResult}`);

        const div = document.createElement('div');
        div.innerHTML = `${new Date().toLocaleString()} - [${target.constructor.name}]: ${name} (${args[0].name}) => ${outResult}<br>`;
        document.getElementById('preview').appendChild(div);

        return result;
    };
}
