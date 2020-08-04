This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## JSON - Schema Form Creation

- Json Schema Form :
  - This is a coding challenge to prove and explain what the development process of Custom json schema form generator would be:
  - _First Step_ : Spike around existing libs
  - _Second Step_ :
    - 1. Define the json schema object
    - 2. Define the Form context and the onChange handlers
    - 3. Define Form Field's behavior
  - _Third Step_ : Refinement and improvements (Task not available for this Code Challenge)

### Form Field List:

- Text Field: which can be either `pure text` or `date`
- Checkbox Field: which can be with options or boolean toggle
- Array Field: which has a list of _items_ (Form Fields) to render
- Object Field: which has _properties_ (Form Fields) to render
- Conditional Field: which has conditions that requires to be TRUE in order to render the Field
- Optional Field: Field can be added as much as the schema allow us to do add : _enums_ ( ie. different phone numbers)

### Form Field Attributes:

- type: field type [ 'text', 'data', 'object', 'array', 'checkbox' ]
- name: name of the form value
- label: label wrapping the Form Field
- conditions: possible required logic before the Field can render
- items | properties: list of Form Fields
- required: boolean to determine if the field is mandatory or not

Optional possible features that could be easily implemented are:

- 1. widgets - ie ( The form will come up within an auto build process based on an Hash Map {key: schema} that will render the expected form just passing a simple prop as a valid _widget key_)
- 2. Custom Validation - By providing a validation Logic each component will learn how to validate each field and what show out in case we are facing an error
- 3. Responsive | UX - This is for me a key aspect of how to make this component `production ready` because enabling mobile behavior ( touch ) and improve the UI is mandatory aspect for successful feature.

Things haven't been fully covered in order to complete the task and not over engineer it and spend too much time on it:

- Test Coverage - At the moment only 1 field component has been tested
- E2E Tests - in order to be able to be `production ready` we need a proper development process which will highline the flows ( or at least the happy paths) and would enable the developer to create the E2E Tests for them
- Performances - Memoize components ( ie. onClick, onSubmit, onChange ) to prevent re-render issues or memory allocation issues.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
