import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Puedes integrar un servicio de logging aquí (Sentry, etc.)
    console.error("ErrorBoundary atrapó un error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-lg mx-auto text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Algo salió mal</h2>
          <p className="mb-6">
            Por favor, recargá la página o volvé al inicio.
          </p>
          <button
            className="text-white bg-gray-800 hover:bg-gray-900 rounded px-4 py-2"
            onClick={() => window.location.assign("/")}
          >
            Volver al inicio
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
