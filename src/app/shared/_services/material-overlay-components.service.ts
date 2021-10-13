import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {MatBottomSheet, MatBottomSheetConfig} from "@angular/material/bottom-sheet";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class MaterialOverlayComponentsService {
  public defaultDialogConfig: MatDialogConfig = new MatDialogConfig<any>();
  public defaultSnackbarConfig: MatSnackBarConfig = new MatSnackBarConfig<any>();
  public defaultBottomSheetConfig: MatBottomSheetConfig = new MatBottomSheetConfig<any>();
  constructor(public _snackbar: MatSnackBar, public _bottomSheet: MatBottomSheet, public _dialog: MatDialog) {
    this.defaultDialogConfig = {height: '80%', width: '60%'};
    this.defaultSnackbarConfig = {horizontalPosition: "start"}
    this.defaultBottomSheetConfig = {};
  }
	public static openNotificationSnackBar(notification: Notification){

	}
}
