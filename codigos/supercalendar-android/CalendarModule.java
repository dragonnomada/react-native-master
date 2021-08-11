package com.supercalendar;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

// TODO: USAR LIBRERÍAS NATIVAS DE ANDROID

public class CalendarModule extends ReactContextBaseJavaModule {

    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", String.format("createCalendarEvent: name %s | location %s", name, location));
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void saludarAlReves(String mensaje, Callback callback) {
        String resultado = "";

        for (String character : mensaje.split("")) {
            resultado = character + resultado;
        }

        callback.invoke(resultado);
    }

}
