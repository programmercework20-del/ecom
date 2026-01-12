@php
    use App\Models\AdminNotification;

    $unreadCount = AdminNotification::where('is_read', 0)->count();
    $notifications = AdminNotification::latest()->take(5)->get();
@endphp

<nav class="app-header navbar navbar-expand bg-body">
    <div class="container-fluid">

        <!-- LEFT -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-lte-toggle="sidebar" href="#">
                    <i class="bi bi-list"></i>
                </a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a href="{{ route('admin.dashboard') }}" class="nav-link">Home</a>
            </li>
        </ul>

        <!-- RIGHT -->
        <ul class="navbar-nav ms-auto">

            <!-- 🔔 NOTIFICATION BELL -->
            <li class="nav-item dropdown">
                <a class="nav-link position-relative"
                   href="#"
                   data-bs-toggle="dropdown">

                    <i class="bi bi-bell fs-5"></i>

                    @if($unreadCount > 0)
                        <span class="position-absolute top-0 start-100 translate-middle
                                     badge rounded-pill bg-danger">
                            {{ $unreadCount }}
                        </span>
                    @endif
                </a>

                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg">

                    <li class="dropdown-header">
                        {{ $unreadCount }} New Notifications
                    </li>

                    <li><hr class="dropdown-divider"></li>

                    @forelse($notifications as $n)
                        <li>
                            <a href="{{ route('admin.notifications.read', $n->id) }}"
                               class="dropdown-item {{ $n->is_read ? '' : 'fw-bold' }}">
                                🛒 {{ $n->message }}
                                <br>
                                <small class="text-muted">
                                    {{ $n->created_at->diffForHumans() }}
                                </small>
                            </a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                    @empty
                        <li class="dropdown-item text-muted">
                            No notifications
                        </li>
                    @endforelse
                </ul>
            </li>

            <!-- 👤 ADMIN MENU -->
            <li class="nav-item dropdown user-menu">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    <img src="{{ asset('admin/dist/assets/img/user2-160x160.jpg') }}"
                         class="user-image rounded-circle shadow">
                    <span class="d-none d-md-inline">Admin</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li class="user-footer">
                        <form method="POST" action="{{ route('admin.logout') }}">
                            @csrf
                            <button class="btn btn-outline-danger w-100">
                                Logout
                            </button>
                        </form>
                    </li>
                </ul>
            </li>

        </ul>

    </div>
</nav>
