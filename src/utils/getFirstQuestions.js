import { pipe, prop, map, keys, values, uniq, filter, without } from 'ramda';

export default questionnaire => {
    const {questions, answers} = questionnaire;
    const allQuestionIds = keys(questions);
    const allLinksToQuestions = pipe(
        map(prop('nextQuestion')),
        values,
        filter(Boolean),
        uniq
    )(answers);

    const firstQuestions = without(allLinksToQuestions, allQuestionIds);

    return firstQuestions;
}
