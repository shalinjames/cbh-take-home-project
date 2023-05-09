## Tickets breakdown

### 1. As facility user I should have Custom ID field in the Agent screen

#### Acceptance criteria

- Given I am on the Agent details screen
- When I want to edit the agent details
- Then I see a new new input field
- And I should be able to add alphanumeric value
- And a maximum of 30 characters

#### Story point : 2

#### Implementation details:

- Add a form field in the Agent details screen
- Update the UI store to hold custom id value

---

### 2. As facility user I should see error message for invalid input on Custom ID field

#### Acceptance criteria

- Given I am on the Agent details screen
- When I enter a value in custom id field
- And the input is invalid
- Then I should see the error message next to the custom id field
- When the user enters non-alphanumeric value
- Then I should see error message "Invalid input only alphanumerics are allowed"
- When user removes all the characters
- Then I should see an error message "Please enter a value for custom id"
- When user exceeds the maximum limit
- Then I should see an error "Maximum 30 characters are allowed"

#### Story point : 3

#### Implementation details:

- Add custom validators for the input field
- Add custom error message in the translation files
- Display the appropriate error message based on the validation condition

---

### 3. As facility user I should be able to save Custom ID for Agent on valid input

#### Acceptance criteria

- Given I enter a value in custom id field
- When the input is valid
- Then I should be able to persist the value in the Agent table

#### Story point : 5

#### Task breakdown for the ticket:

- Update the service layer to send the custom id to the backend api
- Update the agent table in DB to add new custom id
- Update ORM layer to have the new field mapping in the backend microservice
- update the rest endpoint data contract to accept the new field

---

### 4. As a facility user I should see agent custom id in the report

#### Acceptance criteria

- Given I am a facility user
- When I press the generate report button
- Then I get a report in pdf
- And it should have custom agent id
- And it should not have agent primary key from agent table

#### Story point : 3

#### Task breakdown for this ticket

- update the `getShiftsByFacility` to have the agent custom id as part of the agent metadata
- update `generateReport` to replace the agent custom id with the agent id
