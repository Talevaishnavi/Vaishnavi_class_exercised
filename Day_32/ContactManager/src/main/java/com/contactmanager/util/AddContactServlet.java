package com.contactmanager.util;

import java.io.IOException;

import com.contactmanager.model.Contact;
import com.contactmanager.util.ContactStore;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/addContact")
public class AddContactServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        int id = ContactStore.contacts.size() + 1;

        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");

        Contact contact = new Contact(id, name, email, phone);

        ContactStore.contacts.add(contact);

        response.sendRedirect("viewContacts");
    }
}