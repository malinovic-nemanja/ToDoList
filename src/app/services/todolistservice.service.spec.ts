import { TestBed } from '@angular/core/testing';

import { ToDoListService } from './todolistservice.service';

describe('TodolistserviceService', () => {
  let service: ToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
