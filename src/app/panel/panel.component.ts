import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion(): void {
    this._router.navigate(['/login']);
  }

  irAhExportdoras(): void {
    this._router.navigate(['/panel/exportadoras']);
  }

  irAhTrazabilidad(): void {
    this._router.navigate(['/panel/trazabilidad']);
  }

  irAhLotes(): void {
    this._router.navigate(['/panel/lotes']);
  }

  irAhHaciendas(): void {
    this._router.navigate(['/panel/haciendas']);
  }

  irAhEvaluadores(): void {
    this._router.navigate(['/panel/evaluadores']);
  }

  irAhCambiaClave(): void {
    this._router.navigate(['/panel/cambiar-clave']);
  }

}
