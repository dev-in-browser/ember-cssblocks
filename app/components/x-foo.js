import Component, { tracked } from 'sparkles-component';

class XFoo extends Component {
  @tracked firstName = 'CSS';
  @tracked lastName = 'Blocks';
  @tracked isEditing = false;
  @tracked('firstName', 'lastName') get fullName() {
    return [this.firstName, this.lastName].join(' ');
  }

  toggleIsEditing() {
    this.isEditing = !this.isEditing;
  }

  updateFirstName(val) {
    this.firstName = val;
  }
  updateLastName(val) {
    this.lastName = val;
  }
}

export default XFoo;
