import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MyHttpServiceService } from '../http-service.service';
import { User } from '../user.interface';

@Component({
  selector: 'mattable',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css'],
})
export class MaterialTableComponent implements OnInit, OnChanges {
  sendButtonActive = false;

  displayedColumns: string[] = ['name', 'email', 'addrstr', 'action'];

  dataSource;

  userForm: FormGroup;

  usersFormArray: FormArray;

  constructor(public users: MyHttpServiceService, private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.usersFormArray.controls);
  }

  ngOnInit(): void {
    this.users.getUsers().subscribe((users) => {
      this.userForm = this.fb.group({
        users: this.fb.array([]),
      });
      this.usersFormArray = this.userForm.get('users') as FormArray;
      console.log('инициация формы', users);

      users.forEach((user, index) =>
        this.usersFormArray.insert(
          index,
          this.fb.group({
            name: this.fb.control(user.name),
            email: this.fb.control(user.email),
            addrstr: this.fb.control(user.addrstr),
          })
        )
      );
      /* console.log('проверка usersFormArray', this.usersFormArray); */

      this.dataSource = new MatTableDataSource(this.usersFormArray.controls);
      this.dataSource.filterPredicate = (row, filter) => {
        console.log(row, filter);
        const user = row.value as User;
        console.log('проверка return', user.name + ' | ' + user.email + ' | ' + user.addrstr);
        return (
          user.name
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase()) ||
          user.email
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase()) ||
          user.addrstr
            .trim()
            .toLowerCase()
            .includes(filter.trim().toLowerCase())
        );
      };
    });
  }

  filterFunction(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

  deleteUser(i: number): void {
    this.usersFormArray.removeAt(i);
    this.dataSource = new MatTableDataSource(this.usersFormArray.controls);
    this.users.deleteUser(i);
  }

  create(i: number): void {
    this.usersFormArray.insert(i + 1, this.fb.control(''));
    this.dataSource = new MatTableDataSource(this.usersFormArray.controls);
  }

  get usersArray(): FormArray {
    return this.userForm.get('users') as FormArray;
  }
}
