import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {

  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoServiceService,
              private toastr : ToastrService){}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos = data;
    }, error =>{
      this.toastr.error('Ha ocurrido un error', 'Error');
    })
  }

  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      /* console.log('Eliminado'); */
      this.toastr.success('Producto eliminado', 'Eliminado');
      this.obtenerProductos();
    }, error =>{
      /* console.log(error); */
      this.toastr.error('Ha ocurrido un error', 'Error');
    })
  }
}
