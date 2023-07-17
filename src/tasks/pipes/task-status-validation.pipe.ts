import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../enum/task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly status = [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE];

  transform(value: any) {
    value = value.toUpperCase();

    if (this.status.indexOf(value) === -1) {
      throw new BadRequestException('Invalid status');
    }

    return value;
  }
}

// export class TaskStatusValidationPipe implements PipeTransform {
//   readonly allowedStatuses = [
//     TaskStatus.OPEN,
//     TaskStatus.IN_PROGRESS,
//     TaskStatus.DONE,
//   ];

//   transform(value: any) {
//     value = value.toUpperCase();

//     if (!this.isStatusValid(value)) {
//       throw new BadRequestException(`"${value}" is an invalid status`);
//     }

//     return value;
//   }

//   private isStatusValid(status: any) {
//     const idx = this.allowedStatuses.indexOf(status);
//     return idx !== -1;
//   }
// }
