let _scale;

const setEvaluationScale = scale => { _scale = scale; }
const simpleTest = () => { return 'was not hiding??'; }


const getGrade = points => {
    let grade = 0;
    if (!_scale) { return 'there is no evaluation scale defined'; }
    for (let i = 0; i < _scale.lenght; i++) {
        if (points >= _scale[i].points) {
            grade = _scale[i].grade;
        }
    }
    return grade;
}
    
module.exports.setEvaluationScale = setEvaluationScale;
module.exports.getGrade = getGrade;

