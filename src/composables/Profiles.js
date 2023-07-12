import { ref } from "vue";

const profiles = ref([
    {
        first_name: 'James',
        last_name: 'Smith',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Robert',
        last_name: 'Johnson',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Patricia',
        last_name: 'Williams',
        current_class: 'Senior
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Mary',
        last_name: 'Brown',
        current_class: 'Sophomore',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Jennifer',
        last_name: 'Jones',
        current_class: 'Junior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Linda',
        last_name: 'Garcia',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Michael',
        last_name: 'Miller',
        current_class: 'Sophomore',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Elizabeth',
        last_name: 'Davis',
        current_class: 'Junior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'David',
        last_name: 'Rodriguez',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Barbara',
        last_name: 'Wilson',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Susan',
        last_name: 'Lopez',
        current_class: 'Sophomore',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Jessica',
        last_name: 'Hernandez',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'William',
        last_name: 'Anderson',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Richard',
        last_name: 'Thomas',
        current_class: 'Junior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Sarah',
        last_name: 'Lee',
        current_class: 'Sophomore',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Karen',
        last_name: 'Martin',
        current_class: 'Senior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Joseph',
        last_name: 'Perez',
        current_class: 'Junior',
        university: 'UT Austin',
        major: 'Human Resources',
        gpa: '3.1 - 3.4',
        tech_level: 'Intermediate',
        rating: 4,
        interest: 'Support Services',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'    
    },
    {
        first_name: 'Lisa',
        last_name: 'Young',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Thomas',
        last_name: 'Lewis',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Nancy',
        last_name: 'Wright',
        current_class: 'Sophomore',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Christopher',
        last_name: 'King',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Sandra',
        last_name: 'Adams',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Ashley',
        last_name: 'Carter',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Charles',
        last_name: 'Roberts',
        current_class: 'Junior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    },
    {
        first_name: 'Emily',
        last_name: 'Reyes',
        current_class: 'Senior',
        university: 'UT Dallas',
        major: 'MIS',
        gpa: '3.5 and above',
        tech_level: 'Novice',
        interest: 'Clinical Psychology',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque felis orci, sed gravida nulla molestie in. Ut nec sapien nunc. 
          Quisque finibus finibus nulla in malesuada. Donec nec velit vulputate, commodo ex et, consequat lacus. Maecenas vulputate, ipsum sit amet lobortis ornare, diam ex rhoncus nunc, 
          nec aliquam odio ante quis neque. Nunc ut nisl vel odio venenatis molestie eu vel sem. Aliquam vitae venenatis libero. Etiam pharetra, elit eget tincidunt interdum, eros nisl mollis turpis, 
          a ultrices turpis ligula sit amet leo. Aliquam ac tincidunt nulla. Nullam scelerisque metus sit amet ipsum imperdiet, sit amet iaculis velit euismod.'
    }
]);

export default ()=> {
    return {
        profiles
    }
}
