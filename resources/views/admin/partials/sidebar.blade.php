<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    <div class="sidebar-brand">
        <a href="{{ route('admin.dashboard') }}" class="brand-link">
            <img src="{{ asset('admin/dist/assets/img/AdminLTELogo.png') }}"
                 class="brand-image opacity-75 shadow">
            <span class="brand-text fw-light">Admin Panel</span>
        </a>
    </div>

    <div class="sidebar-wrapper">
        <nav class="mt-2">
            <ul class="nav sidebar-menu flex-column">

                <li class="nav-item">
                    <a href="{{ route('admin.dashboard') }}"
                       class="nav-link {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                        <i class="nav-icon bi bi-speedometer"></i>
                        <p>Dashboard</p>
                    </a>
                </li>

            <li class="nav-item">
    <a href="javascript:void(0)"
       class="nav-link"
       data-lte-toggle="treeview">
        <i class="nav-icon bi bi-box"></i>
        <p>
            Products
            <i class="nav-arrow bi bi-chevron-right"></i>
        </p>
    </a>

    <ul class="nav nav-treeview">
        <li class="nav-item">
            <a href="{{ route('admin.products.create') }}" class="nav-link">
                <i class="nav-icon bi bi-plus-circle"></i>
                <p>Add Product</p>
            </a>
        </li>

        <li class="nav-item">
            <a href="{{ route('admin.products.index') }}" class="nav-link">
                <i class="nav-icon bi bi-list-ul"></i>
                <p>Show Products</p>
            </a>
        </li>
    </ul>
</li>



  <li class="nav-item">
    <a href="javascript:void(0)"
       class="nav-link"
       data-lte-toggle="treeview">
        <i class="nav-icon bi bi-box"></i>
        <p>
            Categorys
            <i class="nav-arrow bi bi-chevron-right"></i>
        </p>
    </a>

    <ul class="nav nav-treeview">
        <li class="nav-item">
            <a href="{{ route('admin.category.create') }}" class="nav-link">
                <i class="nav-icon bi bi-plus-circle"></i>
                <p>Add Category</p>
            </a>
        </li>
       <!-- <li class="nav-item">
            <a href="#" class="nav-link">
                <i class="nav-icon bi bi-list-ul"></i>
                <p>Show Category</p>
            </a>
        </li> -->

        


    </ul>



</li>


        <li class="nav-item">
            <a href="{{ route('admin.stock.index') }}"
               class="nav-link {{ request()->routeIs('admin.stock.index') ? 'active' : '' }}">
                <i class="nav-icon bi bi-box-seam"></i>
                <p>Stock</p>
            </a>
        </li>




<li class="nav-item">
    <a href="javascript:void(0)"
       class="nav-link"
       data-lte-toggle="treeview">
        <i class="nav-icon bi bi-box"></i>
        <p>
            Orders
            <i class="nav-arrow bi bi-chevron-right"></i>
        </p>
    </a>

    <ul class="nav nav-treeview">
        <li class="nav-item">
            <a href="{{ route('admin.orders.index') }}" class="nav-link">
                <i class="nav-icon bi bi-list-ul"></i>
                <p>Show Orders</p>
            </a>
        </li>
    </ul>
</li>






                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon bi bi-people"></i>
                        <p>Users</p>
                    </a>
                </li>

            </ul>
        </nav>
    </div>
</aside>
