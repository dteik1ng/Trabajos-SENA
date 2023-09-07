import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  
  productoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  constructor(private fb : FormBuilder,
          private _productoService : ProductoServiceService,
          private router : Router,
          private aRoute : ActivatedRoute,
          private toastr : ToastrService){
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    console.log(this.productoForm);

    const PRODUCTO : Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    if (this.id !== null) {
      //editar
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
        //usar toastr
        /* console.log('Actualizado'); */
        this.toastr.success('Actualizado con exito', 'Exito');
        this.router.navigate(['/']);
      },error =>{
        //usar toastr
        /* console.log('Error'); */
        this.toastr.error('Ha ocurrido un error', 'Error');
        this.productoForm.reset();
      })
    } else
    {
      //crear
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
        //usar el toastr
        /* console.log('Guardado'); */
        this.toastr.success('Guardado con exito', 'Exito');
        this.router.navigate(['/']);
        /* toastr.success('Guardado con exito', 'Exito'); */
      },error =>{
        //usar toastr
        /* console.log('Error'); */
        this.toastr.error('Ha ocurrido un error', 'Error');
        this.productoForm.reset();
      });
    }
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Producto";
      this._productoService.obtenerProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }
}
