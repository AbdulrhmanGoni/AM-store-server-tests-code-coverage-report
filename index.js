fetch("./tests-code-coverage-report/total-code-coverage.json")
    .then((res) => res.json())
    .then((res) => { console.log(res) })
    .catch((error) => { console.log(error) })